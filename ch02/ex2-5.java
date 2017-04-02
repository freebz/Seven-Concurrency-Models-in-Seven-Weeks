public void run() {
	while (!answerReady)
		Thread.sleep(100);
	System.out.println("The meaning of life is: " + answer);
}
