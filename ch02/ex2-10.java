// 2.3 2�� ��: ����� �����ġ�� �Ѿ

synchronized(object) {
	<<�����Ǵ� �ڿ� ���>>
}

synchronized(this){
	<<�޼��� ����>>
}


Lock lock = new ReentrantLock();
lock.lock();
try {
	<<�����Ǵ� �ڿ� ���>>
} finally {
	lock.unlock();
}
