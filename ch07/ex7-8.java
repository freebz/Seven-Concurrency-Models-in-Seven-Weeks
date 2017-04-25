// 7.4 3일 차: OpenCL과 OpenGL-데이터를 GPU에 놓기

// 7.4.1 물결

// 7.4.2 LWJGL

// DataParallelism/Zoom/src/main/java/com/paulbutcher/Zoom.java
CL.create();
CLPlatform platform = CLPlatform.getPlatforms().get(0);
List<CLDevice> devices = platform.getDevices(CL_DEVICE_TYPE_GPU);
CLContext context = CLContext.create(platform, devices, null, drawable, null);
CLCommandQueue queue = clCreateCommandQueue(context, devices.get(0), 0, null);

CLProgram program =
  clCreateProgramWithSource(context, loadSource("zoom.cl"), null);
Util.checkCLError(clBuildProgram(program, devices.get(0), "", null));
CLKernel kernel = clCreateKernel(program, "zoom", null);
