// CAHPTER 7 데이터 병렬성

// 7.1 노트북 속에 감춰진 슈퍼컴퓨터

// 7.2 1일 차: GPGPU 프로그래밍

// 7.2.1 그래픽 처리와 데이터 병렬성

// 7.2.2 첫 번째 OpenCL 프로그래밍

// 커널

// DataParallelism/MultiplyArrays/muliply_arrays.cl
__kernel void multiply_arrays(__global const float* inputA,
			      __global const float* inputB,
			      __global float* output) {
  int i = get_global_id(0);
  output[i] = inputA[i] * inputB[i];
}


// 문맥 생성

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_platform_id platform;
clGetPlatformIDs(1, &platform, NULL);

cl_device_id device;
clGetDeviceIDs(platform, CL_DEVICE_TYPE_GPU, 1, &device, NULL);

cl_context context = clCreateContext(NULL, 1, &device, NULL, NULL, NULL);


// 명령어 큐 만들기

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_command_queue queue = clCreateCommandQueue(context, device, 0, NULL);


// 커널 컴파일하기

// DataParallelism/MultiplyArrays/multiply_arrays.c
char* source = read_source("multiply_arrays.cl");
cl_program program = clCreateProgramWithSource(context, 1,
					       (const char**)&source, NULL, NULL);


// 버퍼 만들기

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


// 작업항목 실행하기

// DataParallelism/MultiplyArrays/multiply_arrays.c
clSetKernelArg(kernel, 0, sizeof(cl_mem), &inputA);
clSetKernelArg(kernel, 1, sizeof(cl_mem), &inputB);
clSetKernelArg(kernel, 2, sizeof(cl_mem), &output);

size_t work_units = NUM_ELEMENTS;
clEnqueueNDRangeKernel(queue, kernel, 1, NULL, &work_units, NULL, 0, NULL, NULL);


// 결과 읽기

// DataParallelism/MultiplyArrays/multiply_arrays.c
cl_float results[NUM_ELEMENTS];
clEnqueueReadBuffer(queue, output, CL_TRUE, 0, sizeof(cl_float) * NUM_ELEMENTS,
		    results, 0, NULL, NULL);


// 정리하기

// DataParallelism/MultiplyArrays/multiply_arrays.c
clReleaseMemObject(inputA);
clReleaseMemObject(inputB);
clReleaseMemObject(output);
clReleaseKernel(kernel);
clReleaseProgram(program);
clReleaseCommandQueue(queue);
clReleaseContext(context);
