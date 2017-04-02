// ThreadsLocks/DiningPhilosophersFixed/src/main/java/com/paulbutcher/Philosopher.java

class Philosopher extends Thread {
	private Chopstick left, right;
	private Random random;

	public Philosopher(Chopstick left, Chopstick right) {
		if(left.getId() < right.getId()) {
			first = left; second = right;
		} else {
			first = right; second = left;
		}
		random = new Random();
	}

	public void run() {
		try {
			while(true) {
				Thread.sleep(random.nextInt(1000));        // ��� �����Ѵ�.
				synchronized(first) {                      // ù ��° �������� ���ø���.
					synchronized(second) {                   // �� ��° �������� ���ø���.
						Thread.sleep(random.nextInt(1000));    // ��� �Դ´�.
					}
				}
			}
		} catch(InterruptedException e) {}
	}
}
