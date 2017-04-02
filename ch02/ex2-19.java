// 2.4 3일 차: 거인의 어깨 위에서

// 2.4.1 스레드 생성 복습

// ThreadsLocks/EchoServer/src/main/java/com/paulbutcher/EcoServer.java

public class EchoServer {

	public static void main(String[] args) throws IOException {

		class ConnectionHandler implements Runnable {
			InputStream in; OutputStream out;
			ConnectionHandler(Socket socket) throws IOException {
				in = socket.getInputStream();
				out = socket.getOutputStream();
			}

			public void run() {
				try {
					int n;
					byte[] buffer = new byte[1024];
					while((n = in.read(buffer)) != -1) {
						out.write(buffer, 0, n);
						out.flush();
					}
				} catch (IOException e) {}
			}
		}
		ServerSocket server = new ServerSocket(4567);
		while (true) {
			Socket socket = server.accept();
			Thread handler = new Thread(new ConnectionHandler(socket));
			handler.start();
		}
	}
}
