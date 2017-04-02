// 2.2.5 여러 개의 잠금장치

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
				Thread.sleep(random.nextInt(1000));        // 잠시 생각한다.
				synchronized(left) {                       // 왼쪽 젓가락을 들어올린다.
					synchronized(right) {                    // 오른쪽 젓가락을 들어올린다.
						Thread.sleep(random.nextInt(1000));    // 잠시 먹는다.
					}
				}
			}
		} catch(InterruptedException e) {}
	}
}
