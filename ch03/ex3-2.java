// °¡º¯ »óÅÂ´Â Å»Ãâ¿Õ

public class Tournament {
	private List<Player> players = new LinkedList<Player>();

	public synchronized void addPlayer(Player p) {
		players.add(p);
	}

	public synchronized Iterator<Player> getPlayerIterator() {
		return players.iterator();
	}
}
