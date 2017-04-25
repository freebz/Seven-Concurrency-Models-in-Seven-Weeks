// 7.4 3�� ��: OpenCL�� OpenGL-�����͸� GPU�� ����

// 7.4.1 ����

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
