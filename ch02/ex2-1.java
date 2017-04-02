// CHAPTER 2 ������� �����ġ

// 2.1 �����ϴ� ���� �ܼ��� �ڵ�
// 2.2 1�� ��: ��ȣ������ �޸� ��
// 2.2.1 ������ �����

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
