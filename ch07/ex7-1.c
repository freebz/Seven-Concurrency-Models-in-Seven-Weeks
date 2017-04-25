// CAHPTER 7 ������ ���ļ�

// 7.1 ��Ʈ�� �ӿ� ������ ������ǻ��

// 7.2 1�� ��: GPGPU ���α׷���

// 7.2.1 �׷��� ó���� ������ ���ļ�

// 7.2.2 ù ��° OpenCL ���α׷���

// Ŀ��

// DataParallelism/MultiplyArrays/muliply_arrays.cl
__kernel void multiply_arrays(__global const float* inputA,
			      __global const float* inputB,
			      __global float* output) {
  int i = get_global_id(0);
  output[i] = inputA[i] * inputB[i];
}


// ���� ����

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_platform_id platform;
clGetPlatformIDs(1, &platform, NULL);

cl_device_id device;
clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL);

cl_context context = clCreateContext(NULL, 1, &device, NULL, NULL, NULL);


// ��ɾ� ť �����

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_command_queue queue = clCreateCommandQueue(context, device, 0, NULL);


// Ŀ�� �������ϱ�

// DataParallelism/MultiplyArrays/multiply_arrays.c
char* source = read_source("multiply_arrays.cl");
cl_program program = clCreateProgramWithSource(context, 1,
					       (const char**)&source, NULL, NULL);


// ���� �����

// DataParallelism/MultiplyArrays/multiply_arrays.c
#define NUM_ELEMENTS 1024

cl_float a[NUM_ELEMENTS], b[NUM_ELEMENTS];
random_fill(a, NUM_ELEMENTS);
random_fill(b, NUM_ELEMENTS);
cl_mem inputA = clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_COPY_HOST_PTR,
			       sizeof(cl_float) * NUM_ELEMENTS, a, NULL);
cl_mem inputB = clCreateBuffer(context, CL_MEM_READ_ONLY | CL_MEM_COPY_HOST_PTR,
			       sizeof(cl_float) * NUM_ELEMENTS, b, NULL);
cl_mem output = clCreateBuffer(context, CL_MEM_WRITE_ONLY,
			       sizeof(cl_float) * NUM_ELEMENTS, NULL, NULL);


// DataParallelism/MultiplyArrays/multiply_arrays.c
void random_fill(cl_float_array[], size_t size) {
  for (int i = 0; i < size; ++i)
    array[i] = (cl_float)rand() / RAND_MAX;
}


// �۾��׸� �����ϱ�

// DataParallelism/MultiplyArrays/multiply_arrays.c
clSetKernelArg(kernel, 0, sizeof(cl_mem), &inputA);
clSetKernelArg(kernel, 1, sizeof(cl_mem), &inputB);
clSetKernelArg(kernel, 2, sizeof(cl_mem), &output);

size_t work_units = NUM_ELEMENTS;
clEnqueueNDRangeKernel(queue, kernel, 1, NULL, &work_units, NULL, 0, NULL, NULL);


// ��� �б�

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_float results[NUM_ELEMENTS];
clEnqueueReadBuffer(queue, output, CL_TRUE, 0, sizeof(cl_float) * NUM_ELEMENTS,
		    results, 0, NULL, NULL);


// �����ϱ�

// DataParallelism/MultiplyArrays/multiply_arrays.c
clReleaseMemObject(inputA);
clReleaseMemObject(inputB);
clReleaseMemObject(output);
clReleaseKernel(kernel);
clReleaseProgram(program);
clReleaseCommandQueue(queue);
clReleaseContext(context);
