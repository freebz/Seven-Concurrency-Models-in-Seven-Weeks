// CHAPTER 2 스레드와 잠금장치

// 2.1 동작하는 가장 단순한 코드
// 2.2 1일 차: 상호배제와 메모리 모델
// 2.2.1 스레드 만들기

// ThreadsLocks/HelloWorld/src/main/java/com/paulbutcher/HelloWorld.java

public class HelloWorld {

	public static void main(String[] args) throws InterruptedException {
		Thread myThread = new Thread() {
				public void run() {
					System.out.println("Hello from new thread");
				}
		};

		myThread.start();
		Thread.yield();
		System.out.println("Hello from main thread");
		myThread.join();
	}
}
