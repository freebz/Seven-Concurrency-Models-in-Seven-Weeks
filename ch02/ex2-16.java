// 2.3.4 조건 변수

ReentrantLock lock = new ReentrantLock();
Condition condition = lock.newCondition();

lock.lock();
try {
	while (!<<조건이 참이다.>>)
		condition.await();
	<<공유되는 자원 사용>>
} finally { lock.unlock(); }
