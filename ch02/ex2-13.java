// 2.3.2 타임아웃

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
				Thread.sleep(random.nextInt(1000));    // 잠시 생각한다.
				leftChopstick.lock();
				try {
					if (rightChopstick.tryLock(1000, TimeUnit.MILLISECONDS)) {
						// 오른쪽 젓가락을 들어올린다.
						try {
							Thread.sleep(random.nextInt(1000));  // 잠시 먹는다.
						} finally { rightChopstick.unlock(); }
					} else {
						// 오른쪽 젓가락을 들어올릴 수 없었으므로 포기하고 다시 생각하는 상태로 돌아간다.
					}
				} finally { leftChopstick.unlock(); }
			}
		} catch(InterruptedException e) {}
	}
}
