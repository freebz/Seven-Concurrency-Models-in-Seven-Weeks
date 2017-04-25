// 7.3.3 �÷��� ��

// 7.3.4 �޸� ��

// 7.3.5 ������ ���� ���

// DataParallelism/FindMinimumOneWorkGroup/find_minimum.c
cl_float acc = FLT_MAX;
for (int i = 0; i < NUM_VALUES; ++i)
  acc = fmin(acc, values[i]);


// ���� �۾��׷� ���

// DataParallelism/FindMinimumOneWorkGroup/find_minimum.c
__kernel void find_minimum(__global const float* values,
			   __global float* result,
			   __local float* scratch) {
  int i = get_global_id(0);
  int n = get_global_size(0);
  scratch[i] = values[i];
  barrier(CLK_LOCAL_MEM_FENCE);
  for (int j = n / 2; j > 0; j /= 2) {
    if (i < j)
      scratch[i] = min(scratch[i], scratch[i + j]);
    barrier(CLK_LOCAL_MEM_FENCE);
  }
  if (i == 0)
    *result = scratch[0];
}


// �庮

// Ŀ�� �����ϱ�

// DataParallelism/FindMinimumOneWorkGroup/find_minimum.c
CHECK_STATUS(clSetKernelArg(kernel, 2, sizeof(cl_float) * NUM_VALUES, NULL));


// ���� ���� �۾��׷� ���

// DataParallelism/FindMinimumMultipleWorkGroups/find_minimum.cl
__kernel void find_minimum(__global const float* values,
			   __global float* results,
			   __local float* scratch) {
  int i = get_local_id(0);
  int n = get_local_size(0);
  scratch[i] = values[get_global_id(0)];
  barrier(CLK_LOCAL_MEM_FENCE);
  for (int j = n / 2; j > 0; j /= 2) {
    if (i < j)
      scratch[i] = min(scratch[i], scratch[i + j]);
    barrier(CLK_LOCAL_MEM_FENCE);
  }
  if (i == 0)
    results[get_global_id(0)] = scratch[0];
}


// DataParallelism/FindMinimumMultipleWorkGroups/find_minimum.c
size_t work_units[] = {NUM_VALUES};
size_t workgroup_size[] = {WORKGROUP_SIZE};
CHECK_STATUS(clEnqueueNDRangeKernel(queue, kernel, 1, NULL, work_units,
				    workgroup_size, 0, NULL, NULL));
