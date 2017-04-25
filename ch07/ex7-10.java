// 7.4.4 OpenCL 커널에서 OpenGL 버퍼에 접근하기

// DataParallelism/Zoom/src/main/resources/zoom.cl
__kernel void zoom(__global float* vertices) {

	unsigned int id = get_global_id(0);
	vertices[id] *= 1.01;
}


// DataParallelism/Zoom/src/main/java/com/paulbutcher/Zoom.java
CLMem vertexBufferCL =
	clCreateFromGLBuffer(context, CL_MEM_READ_WRITE, vertexBuffer, null);


// DataParallelism/Zoom/src/main/java/com/paulbutcher/Zoom.java
while (!Display.isCloseRequested()) {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();
	glTranslatef(0.0f, 0.0f, planeDistance);
	glDrawElements(GL_TRIANGLE_STRIP, mesh.indexCount, GL_UNSIGNED_SHORT, 0);

	Display.update();

	Util.checkCLError(clEnqueueAcquireGLObjects(queue, vertexBufferCL, null, null));
	kernel.setArg(0, vertexBufferCL);
	clEnqueueNDRangeKernel(queue, kernel, 1, null, workSize, null, null, null);
	Util.checkCLError(clEnqueueReleaseGLObjects(queue, vertexBufferCL, null, null));
	clFinish(queue);
}
