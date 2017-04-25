// 7.4.3 OpenGL 내부의 망 나타내기

// DataParallelism/Zoom/src/main/java/com/paulbutcher/Zoom.java
Mesh mesh = new Mesh(2.0f, 2.0f, 64, 64);


// DataParallelism/Zoom/src/main/java/com/paulbutcher/Zoom.java
int vertexBuffer = glGenBuffers();
glBindBuffer(GL_ARRAY_BUFFER, vertexBuffer);
glBufferData(GL_ARRAY_BUFFER, mesh.vertices, GL_DYNAMIC_DRAW);

int indexBuffer = glGenBuffers();
glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, indexBuffer);
glBufferData(GL_ELEMENT_ARRAY_BUFFER, mesh.indices, GL_STATIC_DRAW);
