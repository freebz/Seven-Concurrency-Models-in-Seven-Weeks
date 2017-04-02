// ThreadsLocks/WordCountBatchConcurrentHashMap/src/main/java/com/paulbutcher/Counter.java

private void mergeCounts() {
	for (Map.Entry<String, Integer> e: localCounts.entrySet()) {
		String word = e.getKey();
		Integer count = e.getValue();
		while (true) {
			Integer currentCount = counts.get(word);
			if (currentCount == null) {
				if (counts.putIfAbsent(word, count) == null)
					break;
			} else if (counts.replace(word, currentCount, currentCount + count)) {
				break;
			}
		}
	}
}
