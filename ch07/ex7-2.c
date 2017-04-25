// 7.2.3 프로파일링하기

// DataParallelism/MultiplyArraysProfiled/multiply_arrays.c
cl_event timing_event;
size_t work_units = NUM_ELEMENTS;
clEnqueueNDRangeKernel(queue, kernel, 1, NULL, &work_units,
		       NULL, 0, NULL, &timeing_event);

cl_float results[NUM_ELEMENTS];
clEnqueueReadBuffer(queue, output, CL_TRUE, 0, sizeof(cl_float) * NUM_ELEMENTS,
		    results, 0, NULL, NULL);
cl_ulong starttime;
clGetEventProfilingInfo(timing_event, CL_PROFILING_COMMAND_START,
			sizeof(cl_ulong), &starttime, NULL);
cl_ulong endtime;
clGetEventProfilingInfo(timing_event, CL_PROFILING_COMMAND_END,
			sizeof(cl_ulong), &endtime, NULL);
printf("Elapsed (GPU): %lu ns\n\n", (unsigned long)(endtime - starttime));
clReleaseEvent(timing_event);


// DataParallelism/MultiplyArraysProfiled/multiply_arrays.c
for (int i = 0; i < NUM_ELEMENTS; ++i)
  results[i] = a[i] * b[i];
