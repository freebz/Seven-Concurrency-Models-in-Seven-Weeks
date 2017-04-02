// 2.4.2 카피온라이트

// ThreadsLocks/HttpDownloadBetter/src/main/java/com/paulbutcher/Downloader.java

private CopyOnWriteArrayList<ProgressListener> listeners;

pulic void addListener(ProgressListener listener) {
	listeners.add(listener);
}
public void removeListener(ProgressListener listener) {
	listeners.remove(listener);
}
private void updateProgress(int n) {
	for (ProgressListener listener: listeners)
		listener.onProgress(n);
}
