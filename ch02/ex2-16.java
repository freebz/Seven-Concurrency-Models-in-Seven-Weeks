// 2.3.4 ���� ����

ReentrantLock lock = new ReentrantLock();
Condition condition = lock.newCondition();

lock.lock();
try {
	while (!<<������ ���̴�.>>)
		condition.await();
	<<�����Ǵ� �ڿ� ���>>
} finally { lock.unlock(); }
