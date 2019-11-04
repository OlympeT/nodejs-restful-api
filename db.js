var mongoose = require('mongoose');
mongoose.connect('mongodb://paps:paps123@cluster0-shard-00-00-s5chd.mongodb.net:27017,cluster0-shard-00-01-s5chd.mongodb.net:27017,cluster0-shard-00-02-s5chd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');
