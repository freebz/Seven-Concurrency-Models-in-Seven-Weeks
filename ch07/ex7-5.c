// 7.3 2일 차: 다차원과 작업그룹

// 7.3.1 다차원 작업항목 범위

// 행렬 곱셈

#define WIDTH_OUTPUT WIDTH_B
#define HEIGHT_OUTPUT HEIGHT_A

float a[HEIGHT_A][WIDTH_A] = <<initialize a>>;
float b[HEIGHT_B][WIDTH_B] = <<initialize b>>;
float r[HEIGHT_OUTPUT][WIDTH_OUTPUT];

for (int j = 0; j < HEIGHT_OUTPUT; ++j) {
  for (int i = 0; i < WIDTH_OUTPUT; ++i) {
    float sum = 0.0;
    for (int k = 0; k < WIDTH_A; ++k) {
      sum += a[j][k] * b[k][i];
    }
    r[j][i] = sum;
  }
}


// 병렬 행렬 곱셈

// DataParallelism/MatrixMultiplication/matrix_multiplication.cl
__kernel void matrix_multiplication(uint widthA,
				    __global const float* inputA,
				    __global const float* inputB,
				    __global float* output) {

  int i = get_global_id(0);
  int j = get_global_id(1);

  int outputWidth = get_global_size(0);
  int outputHeight = get_global_size(1);
  int widthB = outputWidth;

  float total = 0.0;
  for (int k = 0; k < widthA; ++k) {
    total += inputA[j * widthA + k] * inputB[k * widthB + i];
  }
  output[j * outputWidth + i] = total;
}


output[j][i] = total;


output[j * outputWidth + i] = total;


// DataParallelism/Matrix_Multiplication/matrix_multiplication.c
size_t work_units[] = {WIDTH_OUTPUT, HEIGHT_OUTPUT};
CHECK_STATUS(clEnqueueNDRangeKernel(queue, kernel, 2, NULL, work_units,
				    NULL, 0, NULL, NULL));
