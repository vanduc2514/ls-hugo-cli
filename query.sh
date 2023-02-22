echo Find All Public Pages Query
node query.js /Users/nvduc/logseq/programming-garden "[:find (pull ?p [*]) :where [?p :block/properties ?pr] [(get ?pr :public) ?t] [(= true ?t)][?p :block/name ?n]]"