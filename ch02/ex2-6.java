// 2.2.5 ���� ���� �����ġ

// ThreadsLocks/DiningPhilosophers/src/main/java/com/paulbutcher/Philosopher.java

class Philosopher extends Thread {
	private Chopstick left, right;
	private Random random;

	public Philosopher(Chopstick left, Chopstick right) {
		this.left = left; this.right = right;
		random = new Random();
	}

	public void run() {
		try {
			while(true) {
				Thread.sleep(random.nextInt(1000));        // ��� �����Ѵ�.
				synchronized(left) {                       // ���� �������� ���ø���.
					synchronized(right) {                    // ������ �������� ���ø���.
						Thread.sleep(random.nextInt(1000));    // ��� �Դ´�.
					}
				}
			}
		} catch(InterruptedException e) {}
	}
}
