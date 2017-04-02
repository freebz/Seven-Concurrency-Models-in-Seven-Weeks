// ThreadsLocks/WordCountSynchronizedHashMap/src/main/java/com/paulbutcher/Counter.java

private void countWord(String word) {
	while (true) {
		Integer currentCount = counts.get(word);
		if (currentCount == null) {
			if (counts.putIfAbsent(word, 1) == null)
				break;
		} else if (counts.replace(word, currentCount, currentCount + 1)) {
			break;
		}
	}
}
