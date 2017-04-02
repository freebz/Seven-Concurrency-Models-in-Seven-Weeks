// 2.3.2 Ÿ�Ӿƿ�

// ThreadsLocks/DiningPhilosophersTimeout/src/main/java/com/paulbutcher/Philosopher.java

class Philosopher extends Thread {
	private ReentrantLock leftChopstick, rightChopstick;
	private Random random;

	public Philosopher(ReentrantLock leftChopstick, ReentrantLock rightChopstick) {
		this.leftChopstick = leftChopstick; this.rightChopstick = rightChopstick;
		random = new Random();
	}

	public void run() {
		try {
			while(true) {
				Thread.sleep(random.nextInt(1000));    // ��� �����Ѵ�.
				leftChopstick.lock();
				try {
					if (rightChopstick.tryLock(1000, TimeUnit.MILLISECONDS)) {
						// ������ �������� ���ø���.
						try {
							Thread.sleep(random.nextInt(1000));  // ��� �Դ´�.
						} finally { rightChopstick.unlock(); }
					} else {
						// ������ �������� ���ø� �� �������Ƿ� �����ϰ� �ٽ� �����ϴ� ���·� ���ư���.
					}
				} finally { leftChopstick.unlock(); }
			}
		} catch(InterruptedException e) {}
	}
}
