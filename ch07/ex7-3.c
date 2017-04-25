// 7.2.4 여러 개의 리턴 값

cl_int clGetDeviceIDs(cl_platform_id platform,
		      cl_device_type device_type,
		      cl_unit        num_entries,
		      cl_device_id*  devices,
		      cl_unit*       num_devices);


cl_device_id devices[8];
cl_unit num_devices;
clGetDeviceIDs(platform, CL_DEVICE_TYPE_ALL, 8, devices, &num_devices);


cl_unit num_devices;
clGetDeviceIDs(platform, CL_DEVICE_TYPE_ALL, 0, NULL, &num_devices);

cl_device_id* devices = (cl_device_id*)malloc(sizeof(cl_device_id) * num_devices);
clGetDeviceIDs(platform, CL_DEVICE_TYPE_ALL, num_devices, devices, NULL);
