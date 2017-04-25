// 7.2.5 에러 처리

cl_int status;

cl_unit num_devices;
status = clGetDeviceIDs(platform, CL_DEVICE_TYPE_ALL, 0, NULL, &num_devices);
if (status != CL_SUCCESS) {
  fprintf(stderr, "Error: unable to determine num_devices (%d)\n", status);
  exit(1);
}

cl_device_id* devices = (cl_device_id*)malloc(sizeof(cl_device_id) * num_devices);
status = clGetDeviceIDs(platform, CL_DEVICE_TYPE_ALL, num_devices, devices, NULL);
if (status != CL_SUCCESS) {
  fprintf(stderr, "Error: unable to retrieve devices (%d)\n", status);
  exit(1);
}


// DataParallelism/MultiplyArraysWithErrorHandling/multiply_arrays.c
#define CHECK_STATUS(s) do { \
  cl_int ss = (s); \
  if (ss != CL_SUCCESS) { \
    fprintf(stderr, "Error %d at line %d\n", ss, __LINE__);	\
    exit(1);							\
  } \
} while (0)


// DataParallelism/MultiplyArraysWithErrorHandling/multiply_arrays.c
CHECK_STATUS(clSetKernelArg(kernel, 0, sizeof(cl_mem), &inputA));


cl_context clCreateContext(const cl_context_properties* properties,
			   cl_unit num_devices,
			   const cl_device_id* devices,
			   void (CL_CALLBACK* pfn_notify)(const char* errinfo,
							  const void* private_info,
							  size_t cb,
							  void* user_data),
			   void* user_data,
			   cl_int* errcode_ret);


// DataParallelism/MultiplyArraysWithErrorHandling/multiply_arrays.c
cl_int status;
cl_context context = clCreateContext(NULL, 1, &device, NULL, NULL, &status);
CHECK_STATUS(status);
