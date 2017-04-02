// ThreadsLocks/WordCountSynchronizedHashMap/src/main/java/com/paulbutcher/WordCount.java

ArrayBlockingQueue<Page> queue = new ArrayBlockingQueue<Page>(100);
HashMap<String, Integer> counts = new HashMap<String, Integer>();
ExecutorService executor = Executors.newCachedThreadPool();
for (int i = 0; i < NUM_COUNTERS; ++i)
	executor.execute(new Counter(queue, counts));
Thread parser = new Thread(new Parser(queue));
parser.start();
parser.join();
for (int i = 0; i < NUM_COUNTERS; ++i)
	queue.shutdown();
executor.shutdown();
executor.awaitTermination(10L, TimeUnit.MINUTES);
