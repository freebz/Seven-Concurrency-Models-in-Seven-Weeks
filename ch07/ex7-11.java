// 7.4.5 물결 시뮬레이션

// DataParallelism/Ripple/src/main/resources/ripple.cl
#define AMPLITUDE 0.1
#define FREQUENCY 10.0
#define SPEED 0.5
#define WAVE_PACKET 50.0
#define DECAY_RATE 2.0
__kernel void ripple(__global float* vertices,
		     __global float* centers,
		     __global long* times,
		     int num_centers,
		     long now) {
  unsigned int id = get_global_id(0);
  unsigned int offset = id * 3;
  float x = vertices[offset];
  float y = vertices[offset + 1];
  float z = 0.0;

  for (int i = 0; i < num_centers; ++i) {
    if (times[i] != 0) {
      float dx = x - centers[i * 2];
      float dy = y - centers[i * 2 + 1];
      float d = sqrt(dx * dx + dy * dy);
      float elapsed = (now - times[i]) / 1000.0;
      float r = elapsed * SPEED;
      float delta = r - d;
      z += AMPLITUDE *
	exp(-DECAY_RATE * r * r) *
	exp(-WAVE_PACKET * delta * delta) *
	cos(FREQUENCY * M_PI_F * delta);
    }
  }
  vertices[offset + 2] = z;
}


// DataParallelism/Ripple/src/main/java/com/paulbutcher/Ripple.java
int numCenters = 16;
int currentCenter = 0;
FloatBuffer centers = BufferUtils.createFloatBuffer(numCenters * 2);
centers.put(new float[numCenters * 2]);
centers.flip();
LongBuffer times = BufferUtils.createLongBuffer(numCenters);
times.put(new long[numCenters]);
times.flip();

CLMem centersBuffer =
	clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_COPY_HOST_PTR, centers, null);
CLMem timesBuffer =
	clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_COPY_HOST_PTR, times, null);


// DataParallelism/Ripple/src/main/java/com/paulbutcher/Ripple.java
while (Mouse.next()) {
	if (Mouse.getEventButtonState()) {
		float x = ((float)Mouse.getEventX() / Display.getWidth()) * 2 - 1;
		float y = ((float)Mouse.getEventY() / Display.getHeight()) * 2 - 1;

		FloatBuffer center = BufferUtils.createFloatBuffer(2);
		center.put(new float[] {x, y});
		center.flip();
		clEnqueueWriteBuffer(queue, centersBuffer, 0,
												 currentCenter * 2 * FLOAT_SIZE, center, null, null);
		LongBuffer time = BufferUtils.createLongBuffer(1);
		time.put(System.currentTimeMillis());
		time.flip();

		clEnqueueWriteBuffer(queue, timesBuffer, 0,
												 currentCenter * LONG_SIZE, time, null, null);
		currentCenter = (currentCenter + 1) % numCenters;
	}
}
