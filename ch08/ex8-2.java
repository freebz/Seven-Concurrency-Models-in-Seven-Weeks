// 8.2.5 XML 처리하기

// LambdaArchitecture/WordCountXml/src/main/java/com/paulbutcher/WordCount.java
public int run(String[] args) throws Exception {
	Configuration conf = getConf();
	conf.set("xmlinput.start", "<text");
	conf.set("xmlinput.end", "</text>");

	Job job = Job.getInstance(conf, "wordcount");
	job.setJarByClass(WordCount.class);
	job.setInputFormatClass(XmlInputFormat.class);
	job.setMapperClass(Map.class);
	job.setCombinerClass(Reduce.class);
	job.setReducerClass(Reduce.class);
	job.setOutputKeyClass(Text.class);
	job.setOutputValueClass(IntWritable.class);
	FileInputFormat.addInputPath(job, new Path(args[0]));
	FileOutputFormat.setOutputPath(job, new Path(args[1]));

	boolean success = job.waitForCompletion(true);
	return success ? 0 : 1;
}


// LambdaArchitecture/WordCountXml/src/main/java/com/paulbutcher/WordCount.java
private final static Pattern textPattern =
	Pattern.compile("^<text.*>(.*)</text>$", Pattern.DOTALL);

public void map(Object key, Text value, Context context)
	throws IOException, InterruptedException {

	String text = value.toString();
	Matcher matcher = textPattern.matcher(text);
	if (matcher.find()) {
		Iterable<String> words = new Words(matcher.group(1));
		for (String word: words)
			context.write(new Text(word), one);
	}
}
