// 8.4 3�� ��: �ӵ� ����

// 8.4.1 �ӵ� ���� �����ϱ�

// 8.4.2 ����

// 8.4.3 ������ �̿��� �⿩ ����

// �⿩�� �α� �ùķ��̼��ϱ�

// LambdaArchitecture/WikiContributorsSpeed/src/main/java/com/paulbutcher/RandomContributorSpout.java
public class RandomContributorSpout extends BaseRichSpout {

	private static final Random rand = new Random();
	private static final DateTimeFormatter isoFormat =
		ISODateTimeFormat.dateTimeNoMillis();

	private SpoutSouputController collector;
	private int contributionId = 10000;

	public void open(Map conf, TopologyContext context,
									 SpoutOutputCollector collector) {

		this.collector = collector;
	}

	public void declareOutputFields(OutputFieldsDeclarer declarer) {
		declarer.declare(new Fields("line"));
	}

	public void nextTuple() {
		Utils.sleep(rand.nextInt(100));
		++contributionId;

		String line = isoFormat.print(DateTime.now()) + " " + contributionId + " " +
			rand.nextInt(10000) + " " + "dummyusername";
		collector.emit(new Values(line));
	}
}


// �α� �׸� �ؼ��ϱ�

// LambdaArchitecture/WikiContributorsSpeed/src/main/java/com/paulbutcher/ContributionParser.java
class ContributionParser extends BaseBasicBolt {
	public void declareOutputFields(OutputFieldsDeclarer declarer) {
		declarer.declare(new Fields("timestamp", "id", "contributiorId", "username"));
	}
	public void execute(Tuple tuple, BasicOutputCollector collector) {
		Contribution contribution = new Contribution(tuple.getString(0));
		collector.emit(new Values(contribution.timestamp, contribution.id,
															contribution.contributorId, contribution.username));
	}
}


// �⿩�� ����ϱ�

// LambdaArchitecture/WikiContributorsSpeed/src/main/java/com/paulbutcher/ContributionRecord.java
class ContributionRecord extends BaseBasicBolt {
	private static final HashMap<Integer, HashSet<Long>> timestamps =
		new HashMap<Integer, HashSet<Long>>();

	public void declareOutputFields(OutputFieldsDeclarer declarer) {
		addTimestamp(tuple.getInteger(2), tuple.getLong(0));
	}

	private void addTimestamp(int contributorId, long timestamp) {
		HashSet<Long> contributorTimestamps = timestamps.get(contributorId);
		if (contributorTimestamps == null) {
			contributorTimestamps = new HashSet<Long>();
			timestamps.put(contributorId, contributorTimestamps);
		}
		contributorTimestamps.add(timestamp);
	}
}


// ���÷��� �����

// LambdaArchitecture/WikiContributorsSpeed/src/main/java/com/paulbutcher/WikiContributorsTopology.java
public class WikiContributorsTopology {

	public static void main(String[] args) throws Exception {

		TopologyBuilder builder = new TopologyBuilder();

		builder.setSpout("contribution_spout", new RandomContributorSpout(), 4);
		builder.setBolt("contribution_parser", new ContributionParser(), 4).
			shuffleGrouping("contribution_spout");

		builder.setBolt("contribution_recorder", new Contri butionRecord(), 4).
			fieldsGrouping("contribution_parser", new Fields("contributorId"));

		LocalCluster cluster = new LocalCluster();
		Config conf = new Config();
		cluster.submitTopology("wiki-contributors", conf, builder.createTopology());

		Thread.sleep(10000);

		cluster.shutdown();
	}
}


// ��Ʈ�� �׷�

// ���� Ŭ������
