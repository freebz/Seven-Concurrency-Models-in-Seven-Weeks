// 7.3.2 장치 정보 질의하기

// DataParallelism/FindDevices/find_devices.c
void print_device_param_string(cl_device_id device,
			       cl_device_info param_id,
			       const char* param_name) {
  char value[1024];
  CHECK_STATUS(clGetDeviceInfo(device, param_id, sizeof(value), value, NULL));
  printf("%s: %s\n", param_name, value);
}


// DataParallelism/FindDevices/find_devices.c
void print_device_info(cl_device_id device) {
  print_device_param_string(device, CL_DEVICE_NAME, "Name");
  print_device_param_string(device, CL_DEVICE_VENDOR, "Vendor");
  print_device_param_uint(device, CL_DEVICE_MAX_COMPUTE_UNITS, "Compute Units");
  print_device_param_ulong(device, CL_DEVICE_GLOBAL_MEM_SIZE, "Global Memory");
  print_device_param_ulong(device, CL_DEVICE_LOCAL_MEM_SIZE, "Local Memory");
  print_device_param_sizet(device, CL_DEVICE_MAX_WORK_GROUP_SIZE, "Workgroup size");
}
