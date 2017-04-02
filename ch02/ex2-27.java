// ThreadsLocks/WordCountSynchronizedHashMap/src/main/java/com/paulbutcher/Counter.java

private void countWord(String word) {
	lock.lock();
	try {
		Integer currentCount = counts.get(word);
		if (currentCount == null)
			counts.put(word, 1);
		else
			counts.put(word, currentCount + 1);
	} finally { lock.unlock(); }
}
