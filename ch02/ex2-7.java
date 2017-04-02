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
				Thread.sleep(random.nextInt(1000));        // 잠시 생각한다.
				synchronized(first) {                      // 첫 번째 젓가락을 들어올린다.
					synchronized(second) {                   // 두 번째 젓가락을 들어올린다.
						Thread.sleep(random.nextInt(1000));    // 잠시 먹는다.
					}
				}
			}
		} catch(InterruptedException e) {}
	}
}
