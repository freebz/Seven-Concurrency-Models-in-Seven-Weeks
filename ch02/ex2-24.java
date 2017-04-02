// ThreadsLocks/WordCountProducerConsumer/src/main/java/com/paulbutcher/Counter.java

class Counter implements Runnable {
	private BlockingQueue<Page> queue;
	private Map<String, Integer> counts;
	public Counter(BlockingQueue<Page> queue,
								 Map<String, Integer> counts) {
		this.queue = queue;
		this.counts = counts;
	}

	public void run() {
		try {
			while(true) {
				Page page = queue.take();
				if (page.isPoisonPill())
					break;

				Iterable<String> words = new Words(page.getText());
				for (String word: words)
					countWord(word);
			}
		} catch(Exception e) { e.printStackTrace(); }
	}
}
