// ThreadsLocks/Interruptible/src/main/java/com/paulbutcher/Interruptible.java

final ReentrantLock l1 = new ReentrantLock();
final ReentrantLock l2 = new ReentrantLock();

Thread t1 = new Thread() {
	public void run() {
		try {
			l1.lockInterruptibly();
			Thread.sleep(1000);
			l2.lockInterruptibly();
		} catch (InterruptedException e) { System.out.println("t1 interrupted"); }
	}
};
