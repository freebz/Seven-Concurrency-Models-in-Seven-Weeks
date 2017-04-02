// ThreadsLocks/HttpDownloadFixed/src/main/java/com/paulbutcher/Downloader.java

private synchronized void updateProgress(int n) {
	ArrayList<ProgressListener> listenersCopy;
	synchronized(this) {
		listenersCopy = (ArrayList<ProgressListener>)listeners.clone();
	}
	for (ProgressListener listener: listenersCopy)
		listener.onProgress(n);
}
