// ThreadsLocks/EchoServerBetter/src/main/java/com/paulbutcher/EchoServer.java

int threadPoolSize = Runtime.getRuntime().availableProcessors() * 2;
ExecutorService excutor = Executor.newFixedThreadPool(threadPoolSize);
while (true) {
	Socket socket = server.accept();
	executor.execute(new ConnectionHandler(socket));
}
