// ThreadsLocks/LinkedList/src/main/java/com/paulbutcher/ConcurrentSortedList.java

public int size() {
	Node current = tail;
	int count = 0;

	while (current.prev != head) {
		ReentrantLock lock = current.lock;
		lock.lock();
		try {
			++count;
			current = current.prev;
		} finally { lock.unlock(); }
	}

	return count;
}
