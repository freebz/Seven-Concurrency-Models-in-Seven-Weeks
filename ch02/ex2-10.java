// 2.3 2일 차: 내재된 잠금장치를 넘어서

synchronized(object) {
	<<공유되는 자원 사용>>
}

synchronized(this){
	<<메서드 본문>>
}


Lock lock = new ReentrantLock();
lock.lock();
try {
	<<공유되는 자원 사용>>
} finally {
	lock.unlock();
}
