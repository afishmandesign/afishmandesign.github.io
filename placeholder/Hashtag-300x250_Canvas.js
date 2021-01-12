(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.stayingpower = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("THE BUZZ.", "bold 24px 'Polaris Heavy'", "#182F56");
	this.text.lineHeight = 29;
	this.text.setTransform(0,61.6);

	this.text_1 = new cjs.Text("BEYOND ", "bold 24px 'Polaris Heavy'", "#182F56");
	this.text_1.lineHeight = 29;
	this.text_1.setTransform(3.3,41.1);

	this.text_2 = new cjs.Text("POWER ", "bold 24px 'Polaris Heavy'", "#182F56");
	this.text_2.lineHeight = 29;
	this.text_2.setTransform(6.5,20.6);

	this.text_3 = new cjs.Text("STAYING ", "bold 24px 'Polaris Heavy'", "#182F56");
	this.text_3.lineHeight = 29;
	this.text_3.setTransform(9.7,0);

	this.addChild(this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135.8,102.2);


(lib.ndmendozalogo2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvaE7IAAp1Ie1AAIAAJ1g");
	mask.setTransform(98.8,31.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCB439").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFgAgIgIQgEAEAAAEQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgEgEgEQgEgEgFAAQgEAAgEAEgAAEAIIgCgEQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIgBAAIAAAHIgEAAIAAgPIAFAAIAFABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgEAAQACAAABAEIACAEgAgBgEIAAAEIABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(48.5,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCB439").s().p("ABSC6IgohFIhuAAIAAAOIAiAAIAAA3Ih8AAIAAg3IAiAAIAAgOIhnAAIAAg3IAcAAIAAh7IgcAAIAAg3IBnAAIAAgPIgiAAIAAg2IBaAAIArBFIByAAIAAgPIgjAAIAAg2IB9AAIAAA2IgjAAIAAAPIAjAAIAxAwIAACIIgxAxIgjAAIAABFgACQA+IAPAAIANgPIAAheIgNgOIgPAAgABRA+IAIAAIAAh7IhSAAgAAIA+IhHh7IgFAAIAAB7IBMAAgAiQA+IAUAAIAAh7IgUAAg");
	this.shape_1.setTransform(30.3,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCB439").s().p("AgUAqQgFgGAAgPIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgLgCgEgDQgHgGAAgOQAAgOAGgGQAGgHAMAAQAOAAAFAIQAEAGAAAOIgMACQAAgKgCgEQgCgFgIAAQgKAAAAAQQAAAIADADQADACAGADQAMACAFADQAGAHABAOQAAAcgaAAQgPAAgFgHg");
	this.shape_2.setTransform(116.5,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCB439").s().p("AgUAqQgFgGAAgPIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgKgDgFgCQgHgHAAgNQAAgOAGgGQAGgHAMAAQAOAAAGAIQADAGAAAOIgMACQAAgKgCgEQgCgFgHAAQgLAAAAAQQAAAIADADQADACAHADQALACAFADQAGAHABAOQAAAcgaAAQgPAAgFgHg");
	this.shape_3.setTransform(110.4,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCB439").s().p("AgVAvIAAhdIApAAIAAALIgcAAIAAAdIAXAAIAAAKIgXAAIAAAgIAeAAIAAALg");
	this.shape_4.setTransform(104.8,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DCB439").s().p("AALAvIgYhGIABBGIgNAAIAAhdIAPAAIAYBFIAAhFIAMAAIAABdg");
	this.shape_5.setTransform(98.5,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCB439").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_6.setTransform(93.8,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCB439").s().p("AgUAqQgFgHAAgOIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgKgDgFgCQgHgHAAgNQAAgOAGgGQAGgHAMAAQAOAAAGAIQADAFABAPIgNACQAAgKgCgEQgCgFgHAAQgLAAAAAQQAAAIADADQADACAHADQAMACAFADQAGAHAAAOQAAAcgaAAQgOAAgGgHg");
	this.shape_7.setTransform(89.4,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCB439").s().p("AgTAqQgFgGAAgOIAAhFIANAAIAABFQAAAIACADQADAEAGAAQAHAAADgEQACgDAAgIIAAhFIANAAIAABFQAAAOgFAGQgGAGgOAAQgOAAgFgGg");
	this.shape_8.setTransform(83.2,44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCB439").s().p("AgZAvIAAhdIAcAAQALAAAEAEQAGAGAAAOQAAARgKAEQAMABAAAVQAAAbgWgBgAgMAkIANAAQAGAAADgDQADgEAAgJQAAgQgLAAIgOAAgAgMgGIANAAQAKAAAAgPQAAgIgDgEQgCgCgFAAIgNAAg");
	this.shape_9.setTransform(76.8,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCB439").s().p("AgTAvIAAhdIAnAAIAAALIgbAAIAAAdIAYAAIAAAKIgYAAIAAArg");
	this.shape_10.setTransform(68.9,44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DCB439").s().p("AgUAlQgGgKAAgbQAAgaAGgKQAGgMAOAAQAQAAAGAMQAFAKAAAaQAAAbgFAKQgGAMgQAAQgOAAgGgMgAgKgcQgDAIAAAUQAAAVADAIQADAIAHAAQAIAAADgIQADgIAAgVQAAgUgDgIQgDgIgIAAQgHAAgDAIg");
	this.shape_11.setTransform(62.8,44.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DCB439").s().p("AgUAvIAAhdIAoAAIAAALIgcAAIAAAdIAYAAIAAAKIgYAAIAAAgIAdAAIAAALg");
	this.shape_12.setTransform(145.4,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DCB439").s().p("AgUAlQgGgKAAgbQAAgZAGgLQAHgMAPAAQAOAAAGAHQAFAGAAAPIgNACQAAgKgCgFQgDgDgIAAQgHgBgEAKQgDAHAAAUQABAWACAGQADAJAIAAQAJAAAEgCIAAgcIgLAAIAAgIIAYAAIAAAsQgMAGgOAAQgPAAgGgMg");
	this.shape_13.setTransform(139.1,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DCB439").s().p("AgVAvIAAhdIApAAIAAALIgcAAIAAAdIAXAAIAAAKIgXAAIAAAgIAeAAIAAALg");
	this.shape_14.setTransform(133.2,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DCB439").s().p("AgTAvIAAhdIANAAIAABSIAZAAIAAALg");
	this.shape_15.setTransform(128,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DCB439").s().p("AgTAvIAAhdIANAAIAABSIAZAAIAAALg");
	this.shape_16.setTransform(123.1,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DCB439").s().p("AgUAlQgGgKAAgbQAAgZAGgLQAFgMAPAAQAPAAAHAMQAFALAAAZQAAAbgFAKQgHAMgPAAQgPAAgFgMgAgKgcQgCAHAAAVQAAAVACAIQADAJAHgBQAIABADgJQADgIAAgVQAAgUgDgIQgDgIgIAAQgHAAgDAIg");
	this.shape_17.setTransform(117.1,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DCB439").s().p("AgTAmQgGgLgBgbQABgaAGgLQAHgLAMAAQAPAAAGAHQAFAGABAPIgNACQAAgKgDgFQgCgDgJAAQgHgBgCAKQgDAHgBAUQABAUADAIQACAJAHAAQAIAAADgDQADgEAAgLIANACQgBAPgFAGQgGAHgPAAQgMAAgHgLg");
	this.shape_18.setTransform(110.7,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DCB439").s().p("AAOAwIgDgTIgVAAIgDATIgOAAIAThfIARAAIATBfgAgIASIARAAIgJg2g");
	this.shape_19.setTransform(102.3,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DCB439").s().p("AgZAvIAAgJIAjhJIghAAIAAgLIAwAAIAAAJIgjBJIAkAAIAAALg");
	this.shape_20.setTransform(96.2,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DCB439").s().p("AgVAlQgFgKAAgbQAAgZAFgLQAGgMAPAAQAQAAAGAMQAFALAAAZQAAAbgFAKQgGAMgQAAQgPAAgGgMgAgKgcQgDAHABAVQgBAVADAIQADAJAHgBQAIABADgJQACgIAAgVQAAgUgCgIQgDgIgIAAQgHAAgDAIg");
	this.shape_21.setTransform(90,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DCB439").s().p("AgaAvIAAhdIAWAAQARgBAHALQAHAKAAAaQAAAcgHAJQgHAKgRAAgAgNAkIAKAAQAKAAAEgIQADgHAAgVQAAgUgDgHQgEgIgKAAIgKAAg");
	this.shape_22.setTransform(83.4,31.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,18.8,140.2,37.4);


(lib.ndmendozalogo = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvaE7IAAp1Ie1AAIAAJ1g");
	mask.setTransform(98.8,31.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#022B5B").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFgAgIgIQgEAEAAAEQAAAFAEAEQAEAEAEAAQAFAAAEgEQAEgEAAgFQAAgEgEgEQgEgEgFAAQgEAAgEAEgAAEAIIgCgEQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAIgBAAIAAAHIgEAAIAAgPIAFAAIAFABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgEAAQACAAABAEIACAEgAgBgEIAAAEIABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(48.5,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#022B5B").s().p("ABSC6IgohFIhuAAIAAAOIAiAAIAAA3Ih8AAIAAg3IAiAAIAAgOIhnAAIAAg3IAcAAIAAh7IgcAAIAAg3IBnAAIAAgPIgiAAIAAg2IBaAAIArBFIByAAIAAgPIgjAAIAAg2IB9AAIAAA2IgjAAIAAAPIAjAAIAxAwIAACIIgxAxIgjAAIAABFgACQA+IAPAAIANgPIAAheIgNgOIgPAAgABRA+IAIAAIAAh7IhSAAgAAIA+IhHh7IgFAAIAAB7IBMAAgAiQA+IAUAAIAAh7IgUAAg");
	this.shape_1.setTransform(30.3,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#022B5B").s().p("AgUAqQgFgGAAgPIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgLgCgEgDQgHgGAAgOQAAgOAGgGQAGgHAMAAQAOAAAFAIQAEAGAAAOIgMACQAAgKgCgEQgCgFgIAAQgKAAAAAQQAAAIADADQADACAGADQAMACAFADQAGAHABAOQAAAcgaAAQgPAAgFgHg");
	this.shape_2.setTransform(116.5,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#022B5B").s().p("AgUAqQgFgGAAgPIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgKgDgFgCQgHgHAAgNQAAgOAGgGQAGgHAMAAQAOAAAGAIQADAGAAAOIgMACQAAgKgCgEQgCgFgHAAQgLAAAAAQQAAAIADADQADACAHADQALACAFADQAGAHABAOQAAAcgaAAQgPAAgFgHg");
	this.shape_3.setTransform(110.4,44.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#022B5B").s().p("AgVAvIAAhdIApAAIAAALIgcAAIAAAdIAXAAIAAAKIgXAAIAAAgIAeAAIAAALg");
	this.shape_4.setTransform(104.8,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#022B5B").s().p("AALAvIgYhGIABBGIgNAAIAAhdIAPAAIAYBFIAAhFIAMAAIAABdg");
	this.shape_5.setTransform(98.5,44.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#022B5B").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_6.setTransform(93.8,44.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#022B5B").s().p("AgUAqQgFgHAAgOIANgCQAAAKACAEQADAFAHAAQANAAAAgQQAAgIgEgEQgDgDgHgDQgKgDgFgCQgHgHAAgNQAAgOAGgGQAGgHAMAAQAOAAAGAIQADAFABAPIgNACQAAgKgCgEQgCgFgHAAQgLAAAAAQQAAAIADADQADACAHADQAMACAFADQAGAHAAAOQAAAcgaAAQgOAAgGgHg");
	this.shape_7.setTransform(89.4,44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#022B5B").s().p("AgTAqQgFgGAAgOIAAhFIANAAIAABFQAAAIACADQADAEAGAAQAHAAADgEQACgDAAgIIAAhFIANAAIAABFQAAAOgFAGQgGAGgOAAQgOAAgFgGg");
	this.shape_8.setTransform(83.2,44.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#022B5B").s().p("AgZAvIAAhdIAcAAQALAAAEAEQAGAGAAAOQAAARgKAEQAMABAAAVQAAAbgWgBgAgMAkIANAAQAGAAADgDQADgEAAgJQAAgQgLAAIgOAAgAgMgGIANAAQAKAAAAgPQAAgIgDgEQgCgCgFAAIgNAAg");
	this.shape_9.setTransform(76.8,44.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#022B5B").s().p("AgTAvIAAhdIAnAAIAAALIgbAAIAAAdIAYAAIAAAKIgYAAIAAArg");
	this.shape_10.setTransform(68.9,44.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#022B5B").s().p("AgUAlQgGgKAAgbQAAgaAGgKQAGgMAOAAQAQAAAGAMQAFAKAAAaQAAAbgFAKQgGAMgQAAQgOAAgGgMgAgKgcQgDAIAAAUQAAAVADAIQADAIAHAAQAIAAADgIQADgIAAgVQAAgUgDgIQgDgIgIAAQgHAAgDAIg");
	this.shape_11.setTransform(62.8,44.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#022B5B").s().p("AgUAvIAAhdIAoAAIAAALIgcAAIAAAdIAYAAIAAAKIgYAAIAAAgIAdAAIAAALg");
	this.shape_12.setTransform(145.4,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#022B5B").s().p("AgUAlQgGgKAAgbQAAgZAGgLQAHgMAPAAQAOAAAGAHQAFAGAAAPIgNACQAAgKgCgFQgDgDgIAAQgHgBgEAKQgDAHAAAUQABAWACAGQADAJAIAAQAJAAAEgCIAAgcIgLAAIAAgIIAYAAIAAAsQgMAGgOAAQgPAAgGgMg");
	this.shape_13.setTransform(139.1,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#022B5B").s().p("AgVAvIAAhdIApAAIAAALIgcAAIAAAdIAXAAIAAAKIgXAAIAAAgIAeAAIAAALg");
	this.shape_14.setTransform(133.2,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#022B5B").s().p("AgTAvIAAhdIANAAIAABSIAZAAIAAALg");
	this.shape_15.setTransform(128,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#022B5B").s().p("AgTAvIAAhdIANAAIAABSIAZAAIAAALg");
	this.shape_16.setTransform(123.1,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#022B5B").s().p("AgUAlQgGgKAAgbQAAgZAGgLQAFgMAPAAQAPAAAHAMQAFALAAAZQAAAbgFAKQgHAMgPAAQgPAAgFgMgAgKgcQgCAHAAAVQAAAVACAIQADAJAHgBQAIABADgJQADgIAAgVQAAgUgDgIQgDgIgIAAQgHAAgDAIg");
	this.shape_17.setTransform(117.1,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#022B5B").s().p("AgTAmQgGgLgBgbQABgaAGgLQAHgLAMAAQAPAAAGAHQAFAGABAPIgNACQAAgKgDgFQgCgDgJAAQgHgBgCAKQgDAHgBAUQABAUADAIQACAJAHAAQAIAAADgDQADgEAAgLIANACQgBAPgFAGQgGAHgPAAQgMAAgHgLg");
	this.shape_18.setTransform(110.7,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#022B5B").s().p("AAOAwIgDgTIgVAAIgDATIgOAAIAThfIARAAIATBfgAgIASIARAAIgJg2g");
	this.shape_19.setTransform(102.3,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#022B5B").s().p("AgZAvIAAgJIAjhJIghAAIAAgLIAwAAIAAAJIgjBJIAkAAIAAALg");
	this.shape_20.setTransform(96.2,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#022B5B").s().p("AgVAlQgFgKAAgbQAAgZAFgLQAGgMAPAAQAQAAAGAMQAFALAAAZQAAAbgFAKQgGAMgQAAQgPAAgGgMgAgKgcQgDAHABAVQgBAVADAIQADAJAHgBQAIABADgJQACgIAAgVQAAgUgCgIQgDgIgIAAQgHAAgDAIg");
	this.shape_21.setTransform(90,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#022B5B").s().p("AgaAvIAAhdIAWAAQARgBAHALQAHAKAAAaQAAAcgHAJQgHAKgRAAgAgNAkIAKAAQAKAAAEgIQADgHAAgVQAAgUgDgHQgEgIgKAAIgKAAg");
	this.shape_22.setTransform(83.4,31.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = mask;

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,18.8,140.2,37.4);


(lib.ndlockuppathed = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAcIAAgsIgTAsIgDAAIgTgrIAAArIgFAAIAAg2IAFAAIAUAwIAWgwIAEAAIAAA2g");
	this.shape.setTransform(237.4,76.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUANIAGAAQACAKAMAAQAPAAAAgLQAAgGgDgCQgDgDgJAAQgHgBgEgBQgGgEAAgHQAAgPARgBQASAAACAPIgFAAQgBgKgOABQgMAAAAAKQAAAFACACQAEACAGAAQALACAEABQAFADAAAJQAAAIgGAEQgGAFgIAAQgQgBgEgPg");
	this.shape_1.setTransform(231.8,76.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAqQgQgPAAgbQAAgaAQgPQAPgOAZAAQAbAAAPAOQAPAPAAAaIAAAJIhLAAQAAARATAAQAQABABgIIAlAFQgBAOgMAJQgNAJgbAAQgaAAgQgOgAgMgWQgFAFAAAHIAjAAQAAgQgRAAQgHAAgGAEg");
	this.shape_2.setTransform(224.1,85.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqBFQgNgIgBgTIAlgGQAAAGAEACQAEADALAAQATAAAAgPIAAgNQgKAMgTAAQgWAAgMgOQgNgOAAgYQAAgbANgOQAMgOAWAAQAVAAALAPIADgMIAhAAIgCBrQAAAWgSALQgPAKgXAAQgcAAgOgIgAgTgVQAAAVATAAQAMAAAHgKIAAgXQgHgKgMAAQgTAAAAAWg");
	this.shape_3.setTransform(210.8,87.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtAvQgKgKAAgNQAAgSALgGQAIgGAUgCIAhgGIAAgDQAAgJgPAAQgPAAAAAKIglgEQAAgSALgHQAMgKAdAAQAbAAAMAKQANAKAAAWIACBCIgiAAIgCgLQgOAOgZAAQgRAAgJgJgAgDAJQgLACAAAHQAAAJAJAAQAMAAAKgKIAAgLg");
	this.shape_4.setTransform(197.7,85.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA6QgJgKAAgRIAAgmIgUAAIAAgfIAUAAIAAggIAiAAIAAAgIAhAAIAAAfIghAAIAAAiQAAALALABQAJABAKgGIADAgQgJAFgOAAQgXAAgMgNg");
	this.shape_5.setTransform(186.5,84.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA3IAAg7QAAgRgPAAQgNAAgJAKIAABCIgkAAIgChqIAhAAIADAMQAMgPATAAQAtAAgBAtIAABAg");
	this.shape_6.setTransform(175.4,85.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAvQgKgKAAgNQAAgSALgGQAIgGAUgCIAhgGIAAgDQAAgJgPAAQgOAAgBAKIglgEQAAgSALgHQAMgKAdAAQAbAAAMAKQANAKAAAWIACBCIgiAAIgCgLQgPAOgYAAQgRAAgJgJgAgDAJQgLADAAAGQAAAJAJAAQANAAAJgKIAAgLg");
	this.shape_7.setTransform(161.8,85.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA1IgthpIApAAIAWBEIAXhEIAoAAIgtBpg");
	this.shape_8.setTransform(149.6,85.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsBEQgNgPAAgcQAAgaANgOQAMgPAWAAQASAAALANIAAhAIAlAAIACCgIghAAIgDgMQgOAPgSAAQgWAAgMgOgAgTAZQAAAYATAAQAMAAAHgKIAAgcQgHgKgMAAQgTAAAAAYg");
	this.shape_9.setTransform(136.7,83);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlBPIgJgbIg4AAIgIAbIgoAAIA3idIAqAAIA4CdgAgSAWIAlAAIgTg9g");
	this.shape_10.setTransform(122.6,83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBJIAWgwIgthiIApAAIAXBFIAYhFIApAAIhBCSg");
	this.shape_11.setTransform(106.1,87.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjA3IgChqIAhAAIADAMQAGgPATAAQAIAAAGADIgCAiIgKgCQgTAAgHAKIAABAg");
	this.shape_12.setTransform(95.3,85.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtAvQgKgKAAgNQAAgSALgGQAIgGAUgCIAhgGIAAgDQAAgJgPAAQgPAAAAAKIglgEQAAgSALgHQAMgKAdAAQAbAAAMAKQANAKAAAWIACBCIgiAAIgCgLQgOAOgZAAQgRAAgJgJgAgDAJQgLACAAAHQAAAJAJAAQAMAAAKgKIAAgLg");
	this.shape_13.setTransform(83.8,85.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag5AZQAAg3AvAAQASAAALANIAAhAIAlAAIACCgIghAAIgDgMQgPAPgRAAQgvAAAAg5gAgUAZQAAAMAGAGQAFAGAJAAQALAAAIgKIAAgcQgHgKgMAAQgUAAAAAYg");
	this.shape_14.setTransform(70.7,83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAUA3IAAg7QAAgRgQAAQgMAAgJAKIAABCIglAAIgChqIAiAAIACAMQANgPAUAAQArAAABAtIAABAg");
	this.shape_15.setTransform(57.4,85.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoAqQgPgPAAgbQAAgaAPgPQAPgOAZAAQAbAAAPAOQAOAPAAAaIAAAJIhKAAQAAARATAAQARABAAgIIAlAFQgBAhg0gBQgaAAgQgOgAgRgKIAiAAQABgQgSAAQgQAAgBAQg");
	this.shape_16.setTransform(44.3,85.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqBFQgOgIAAgTIAlgGQAAALASAAQAUAAAAgPIAAgNQgKAMgTAAQgWAAgNgOQgMgNAAgZQAAg3AvAAQATAAANAPIACgMIAiAAIgCBrQAAAWgSALQgPAKgXAAQgdAAgNgIgAgTgVQgBAVAUAAQAMAAAHgKIAAgXQgHgKgMAAQgUAAABAWg");
	this.shape_17.setTransform(31.1,87.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoAqQgPgPAAgbQAAgaAPgPQAPgOAZAAQAbAAAPAOQAOAPAAAaIAAAJIhKAAQAAARATAAQARABAAgIIAlAFQgBAhg0gBQgaAAgQgOgAgRgKIAiAAQABgQgSAAQgQAAgBAQg");
	this.shape_18.setTransform(18.1,85.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag1BOIAAibIAlAAIAAB6IBGAAIAAAhg");
	this.shape_19.setTransform(5.9,83.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0B33D").s().p("AhsCPQgggbgBg3IBQgKQABAdAQAMQAQALAegBQA+gCAAglQgBgQgNgIQgOgHgkgCQg+gEgcgOQgpgTgBg2QgCg2AogeQAjgaA5gBQBGABAlAdQAjAdABA0IhQALQAAgcgRgNQgQgLgeABQgVAAgOAIQgRAKAAAVQABAOALAFQALAEAhACQBLAEAdASQAjAUABA5QAAA4grAdQgmAag7AAQhLAAgjgeg");
	this.shape_20.setTransform(215.5,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0B33D").s().p("AhsCPQgggbgBg3IBQgKQABAdAQAMQAQALAegBQA+gCAAglQgBgQgNgIQgOgHgkgCQg+gEgdgOQgogTgCg2QgBg2AogeQAkgaA4gBQBGABAlAdQAkAdAAA0IhQALQAAgcgRgNQgQgLgeABQgVAAgOAIQgRAKAAAVQABAOALAFQALAEAhACQBMAEAbASQAkAUABA5QAAA4grAdQglAag8AAQhLAAgjgeg");
	this.shape_21.setTransform(183.9,50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0B33D").s().p("Ah7CmIAAlLIDvAAIAABHIigAAIAAA5ICJAAIAABEIiJAAIAABAICpAAIAABHg");
	this.shape_22.setTransform(154.8,50.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0B33D").s().p("ABECmIiCi/IABC/IhPAAIAAlLIBJAAICBC/IAAi/IBPAAIAAFLg");
	this.shape_23.setTransform(122.9,50.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0B33D").s().p("AgmCmIAAlLIBNAAIAAFLg");
	this.shape_24.setTransform(99.1,50.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0B33D").s().p("AhsCPQgggbgBg3IBQgKQABAdARAMQAPALAegBQA+gCAAglQgBgQgNgIQgOgHgkgCQg+gEgcgOQgpgTgBg2QgCg2AogeQAjgaA5gBQBGABAlAdQAjAcABA1IhQALQAAgcgRgNQgQgLgeABQgVAAgOAIQgRAKAAAVQABAOALAFQALAEAhACQBLAEAdASQAjAUABA5QAAA4grAdQgmAag7AAQhLAAgjgeg");
	this.shape_25.setTransform(77,50.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0B33D").s().p("AhuCEQgdgfgBg9IAAjQIBPAAIAADOQAAAeAKANQAOASAlAAQAmAAAOgSQAKgNgBgeIAAjOIBQAAIAADQQAAA9gdAfQgjAlhNAAQhNAAghglg");
	this.shape_26.setTransform(45,50.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0B33D").s().p("AiGCmIAAlLICUAAQBtAAAABdQAAAWgIARQgHARgNAJQATAFAKAVQAKAUAAAbQAAA6gkAYQgbASg2AAgAg3BfIBFAAQASAAAIgEQAOgHAAgUQAAgUgNgHQgIgGgSAAIhGAAgAg3glIBCAAQAQAAAHgGQAJgHAAgRQAAgQgJgGQgGgFgRAAIhCAAg");
	this.shape_27.setTransform(13.7,50.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0B33D").s().p("AhfB/IAAj+IC4AAIAAA2Ih7AAIAAAtIBpAAIAAA0IhpAAIAAAxICCAAIAAA2g");
	this.shape_28.setTransform(218.4,13.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0B33D").s().p("ABIB/IAAiSIgyCSIgrAAIgxiSIAACSIg8AAIAAj+IBNAAIA1CjIA3ijIBMAAIAAD+g");
	this.shape_29.setTransform(191.7,13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0B33D").s().p("AA8CBIgNgrIhdAAIgNArIhBAAIBakBIBFAAIBaEBgAgeAkIA9AAIgfhlg");
	this.shape_30.setTransform(164.2,13.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0B33D").s().p("AhsB/IAAj+IBfAAQA+AAAeAfQAeAgAABAQAABCgeAeQgeAfg+AAgAgwBJIAjAAQAhABAPgVQANgRAAgkQAAgjgNgSQgPgTghgBIgjAAg");
	this.shape_31.setTransform(140.7,13.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0B33D").s().p("AhfB/IAAj+IC4AAIAAA2Ih7AAIAAAtIBqAAIAAA0IhqAAIAAAxICCAAIAAA2g");
	this.shape_32.setTransform(108,13.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0B33D").s().p("AAmB/IgwhYIgnAAIAABYIg9AAIAAj+IBwAAQBgABAABTQAAA6guARIA7BfgAgxgNIA3AAQANAAAHgFQAKgHAAgSQAAgdgegBIg3AAg");
	this.shape_33.setTransform(85,13.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0B33D").s().p("AgdB/IAAjIIhGAAIAAg2IDHAAIAAA2IhGAAIAADIg");
	this.shape_34.setTransform(60.9,13.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0B33D").s().p("AhbBgQgcgiAAg+QAAg9AcgiQAeglA9AAQA+AAAeAlQAcAiAAA9QAAA+gcAiQgeAlg+AAQg8AAgfglgAg6AAQAAAkAMASQAOAYAgABQA7gBAAhOQAAhOg7AAQg6AAAABOg");
	this.shape_35.setTransform(37.6,13.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0B33D").s().p("AA1B/IhkiSIAACSIg8AAIAAj+IA4AAIBjCTIgBiTIA+AAIAAD+g");
	this.shape_36.setTransform(10.9,13.4);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240.1,95.4);


(lib.hashtophorz = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002B5B").s().p("AsFBZIAAixIYLAAIAACxg");
	this.shape.setTransform(77.5,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155,18);


(lib.hashrightvert = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002B5B").s().p("AkARBMAFHgiBIC5AAMgFJAiBg");
	this.shape.setTransform(25.7,78);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-31,51.4,217.9);


(lib.hashleftvert = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002B5B").s().p("AjpOmIEZ9LIC6AAIkcdLg");
	this.shape.setTransform(23.5,93.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,186.9);


(lib.hashbottomhoriz = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002B5B").s().p("AsFBZIAAiyIYLAAIAACyg");
	this.shape.setTransform(77.5,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,154.9,18);


(lib.GRADPROGS2 = function() {
	this.initialize();

	// Layer 1
	this.txt_message = new cjs.Text("VARIABLE TEXT 2", "13px 'Polaris Medium'", "#DCB439");
	this.txt_message.name = "txt_message";
	this.txt_message.textAlign = "center";
	this.txt_message.lineHeight = 14;
	this.txt_message.lineWidth = 256;
	this.txt_message.setTransform(128,0);

	this.addChild(this.txt_message);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,57);


(lib.GRADPROGS = function() {
	this.initialize();

	// Layer 1
	this.txt_message = new cjs.Text("VARIABLE TEXT 1", "bold 17px 'Polaris Bold'", "#DCB439");
	this.txt_message.name = "txt_message";
	this.txt_message.textAlign = "center";
	this.txt_message.lineHeight = 18;
	this.txt_message.lineWidth = 256;
	this.txt_message.setTransform(128,0);

	this.addChild(this.txt_message);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,57);


(lib.btnlearnmore = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCB439").s().p("AorCnIAAlNIRXAAIAAFNgAoXCTIQvAAIAAklIwvAAg");
	this.shape.setTransform(55.7,16.8);

	this.txt_btn = new cjs.Text("VAR BTN TXT", "bold 11px 'Polaris Bold'", "#DCB439");
	this.txt_btn.name = "txt_btn";
	this.txt_btn.textAlign = "center";
	this.txt_btn.lineHeight = 13;
	this.txt_btn.lineWidth = 102;
	this.txt_btn.setTransform(55.6,10.7);

	this.addChild(this.txt_btn,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111.4,61.5);


(lib.btn_Clear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A8QYnMAAAgxNMA4hAAAMAAAAxNg");
	this.shape.setTransform(181,157.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bluewedge = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01295E").s().p("AjVWBMgoLgsBMBXBAAAMAAAAsBg");
	this.shape.setTransform(278.5,141);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,557,282);


(lib.ndmendozalogoworking2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ndmendozalogo2();
	this.instance.setTransform(91.4,12.7,1,1,0,0,0,98.8,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCB439").s().p("AALAvIgYhGIABBGIgNAAIAAheIAPAAIAYBGIAAhGIAMAAIAABeg");
	this.shape.setTransform(69.2,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCB439").s().p("AgVAvIAAheIApAAIAAAMIgcAAIAAAeIAXAAIAAAJIgXAAIAAAgIAeAAIAAALg");
	this.shape_1.setTransform(63.3,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DCB439").s().p("AAVAvIABhDIgRBDIgJAAIgRhDIABBDIgNAAIAAheIATAAIAOBHIAPhHIATAAIAABeg");
	this.shape_2.setTransform(56.2,12.8);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-18.8,197.6,63);


(lib.ndmendozalogoworking = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ndmendozalogo();
	this.instance.setTransform(91.4,12.7,1,1,0,0,0,98.8,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#022B5B").s().p("AALAvIgYhGIABBGIgNAAIAAheIAPAAIAYBGIAAhGIAMAAIAABeg");
	this.shape.setTransform(69.2,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#022B5B").s().p("AgVAvIAAheIApAAIAAAMIgcAAIAAAeIAXAAIAAAJIgXAAIAAAgIAeAAIAAALg");
	this.shape_1.setTransform(63.3,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#022B5B").s().p("AAVAvIABhDIgRBDIgJAAIgRhDIABBDIgNAAIAAheIATAAIAOBHIAPhHIATAAIAABeg");
	this.shape_2.setTransform(56.2,12.8);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.4,-18.8,197.6,63);


(lib.ndlogopathedmasked = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyPFeIAAq7MAkfAAAIAAK7g");
	mask.setTransform(114.4,34.1);

	// Layer 1
	this.instance = new lib.ndlockuppathed();
	this.instance.setTransform(120,47.6,1,1,0,0,0,120,47.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.3,69.2);


(lib.legendaryadv = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzKCEIAAkHMAmVAAAIAAEHg");
	mask.setTransform(120.3,85.2);

	// Layer 1
	this.instance = new lib.ndlockuppathed();
	this.instance.setTransform(120,47.6,1,1,0,0,0,120,47.6);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,71.9,240.1,23.4);


// stage content:
(lib.Hashtag300x250_Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"fade in starts":2,"fade in finished":5,"animation starts":19,"animation finished":42});

	// timeline functions:
	this.frame_0 = function() {
		/* // Frame 1 should only contain empty keyframe.
		//
		// The script 'EBStd.Init(this);' below should be 
		// included in all flash assets used in the Eyeblaster System with AS3:
		EBStd.Init(this);
		import flash.events.MouseEvent;*/
		
		adkit.onReady(startAd.bind(this));
		
		function startAd() {
			this.mc_message.txt_message.text = adkit.getSVData("message_text") || "MESSAGE";
			this.mc_message2.txt_message.text = adkit.getSVData("message2_text") || "";
			this.mc_button.txt_btn.text = adkit.getSVData("cta_btn_text") || "BUTTON";
		}
			
		this.clickthrough_btn.addEventListener("click", clickThroughFunc.bind(this));
		function clickThroughFunc()
		{
			EB.clickthrough();
		}
		
		this.playcount = 0;
		
		if (window.devicePixelRatio > 1) {  
		  
		    var canvasWidth = canvas.width;  
		    var canvasHeight = canvas.height;  
		  
		  
		    canvas.width = canvasWidth * window.devicePixelRatio;  
		    canvas.height = canvasHeight * window.devicePixelRatio;  
		    canvas.style.width = canvasWidth+"px";  
		    canvas.style.height = canvasHeight+"px";  
		
			stage.scaleX=stage.scaleY=window.devicePixelRatio;  
		}
	}
	this.frame_1 = function() {
		/* clickthrough_btn.addEventListener(MouseEvent.CLICK,ClickThruURL);
		function ClickThruURL(event:MouseEvent){
			EBStd.Clickthrough();
		}
		import fl.transitions.Tween;
		import fl.transitions.easing.*;
		import fl.transitions.TweenEvent;
		
		var playcount = 0;*/
	}
	this.frame_2 = function() {
		/* playcount ++;*/
		
		this.playcount ++;
		this.mc_button.alpha = 0;
		this.mc_message.alpha = 0;
		this.mc_message2.alpha = 0;
	}
	this.frame_95 = function() {
		/* var msgheight = mc_message.txt_message.textHeight;
		if (msgheight < 30) {
			mc_message.y = 144;
		} else {
			mc_message.y = 132;
		}
		var btn_tween:Tween = new Tween(mc_button, "alpha", Strong.easeOut, 0, 1, 0.7, true);
		var message_tween:Tween = new Tween(mc_message, "alpha", Strong.easeOut, 0, 1, 0.3, true);*/
		
		this.msgheight = this.mc_message.getBounds().height;
		if (this.mc_message2.txt_message.text) {
			this.mc_message.y = 166;
			this.mc_message2.y = 186;
		} else {
			this.mc_message.y = 176;
		}
		this.btn_tween = createjs.Tween.get(this.mc_button).to({alpha:1},700);
		this.message_tween = createjs.Tween.get(this.mc_message).to({alpha:1},300);
		this.message2_tween = createjs.Tween.get(this.mc_message2).to({alpha:1},300);
	}
	this.frame_129 = function() {
		/* if (playcount == 1) {
			//gotoAndPlay(2);
		} else {
			stop();
		}*/
		
		if (this.playcount != 1) {
			this.stop();
		}
	}
	this.frame_134 = function() {
		/* this.mc_message.y = 250;
		this.mc_button.alpha = 0;
		gotoAndPlay(3);*/
		
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(93).call(this.frame_95).wait(34).call(this.frame_129).wait(5).call(this.frame_134).wait(6));

	// btn
	this.clickthrough_btn = new lib.btn_Clear();
	this.clickthrough_btn.setTransform(150,125,0.829,0.794,0,0,0,181,157.5);
	this.clickthrough_btn._off = true;
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.btn_Clear(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(1).to({_off:false},0).to({_off:true},134).wait(5));

	// learn more
	this.mc_button = new lib.btnlearnmore();
	this.mc_button.setTransform(235.2,220.5,1,1,0,0,0,55.6,16.8);
	this.mc_button.alpha = 0;
	this.mc_button._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_button).wait(1).to({_off:false},0).to({_off:true},134).wait(5));

	// message
	this.mc_message = new lib.GRADPROGS();
	this.mc_message.setTransform(79.2,275.5,1,1,0,0,0,59.2,23.5);
	this.mc_message.alpha = 0;
	this.mc_message._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_message).wait(1).to({_off:false},0).to({_off:true},134).wait(5));

	// message2
	this.mc_message2 = new lib.GRADPROGS2();
	this.mc_message2.setTransform(79.2,340.5,1,1,0,0,0,59.2,23.5);
	this.mc_message2.alpha = 0;
	this.mc_message2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_message2).wait(1).to({_off:false},0).to({_off:true},134).wait(5));

	// blue masker (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_77 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXBAAAMgoLAsBg");
	var mask_graphics_78 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXAAAAMgoJAsBg");
	var mask_graphics_79 = new cjs.Graphics().p("EgrfAWBMAAAgsBMBW/AAAMgoJAsBg");
	var mask_graphics_80 = new cjs.Graphics().p("EgrfAWBMAAAgsBMBXAAAAMgoLAsBg");
	var mask_graphics_81 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXBAAAMgoLAsBg");
	var mask_graphics_82 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXAAAAMgoJAsBg");
	var mask_graphics_130 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXAAAAMgoJAsBg");
	var mask_graphics_131 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXAAAAMgoJAsBg");
	var mask_graphics_132 = new cjs.Graphics().p("EgrfAWBMAAAgsBMBXAAAAMgoKAsBg");
	var mask_graphics_133 = new cjs.Graphics().p("EgrfAWBMAAAgsBMBXAAAAMgoLAsBg");
	var mask_graphics_134 = new cjs.Graphics().p("EgrgAWBMAAAgsBMBXBAAAMgoLAsBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(77).to({graphics:mask_graphics_77,x:-278.5,y:136}).wait(1).to({graphics:mask_graphics_78,x:-168.5,y:136}).wait(1).to({graphics:mask_graphics_79,x:-58.5,y:136}).wait(1).to({graphics:mask_graphics_80,x:51.5,y:136}).wait(1).to({graphics:mask_graphics_81,x:161.5,y:136}).wait(1).to({graphics:mask_graphics_82,x:271.5,y:136}).wait(48).to({graphics:mask_graphics_130,x:271.5,y:136}).wait(1).to({graphics:mask_graphics_131,x:134,y:136}).wait(1).to({graphics:mask_graphics_132,x:-3.5,y:136}).wait(1).to({graphics:mask_graphics_133,x:-141,y:136}).wait(1).to({graphics:mask_graphics_134,x:-278.5,y:136}).wait(6));

	// LA
	this.instance = new lib.legendaryadv();
	this.instance.setTransform(152.5,-110,1,1,0,0,0,120,47.6);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({y:88},4).to({y:78},2).to({_off:true},40).wait(5));

	// NDB
	this.instance_1 = new lib.ndlogopathedmasked();
	this.instance_1.setTransform(152.5,77.5,1,1,0,0,0,120,47.6);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({_off:true},58).wait(5));

	// gold logo
	this.instance_2 = new lib.ndmendozalogoworking2();
	this.instance_2.setTransform(100.4,215,1,1,0,0,0,91.4,12.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77).to({_off:false},0).to({_off:true},58).wait(5));

	// blue bg
	this.instance_3 = new lib.bluewedge();
	this.instance_3.setTransform(271.5,136,1,1,0,0,180,278.5,141);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77).to({_off:false},0).to({_off:true},58).wait(5));

	// Layer 15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_24 = new cjs.Graphics().p("AqfHEICJuHIS2AAIAAOHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_1_graphics_24,x:208.5,y:62}).wait(116));

	// staying power
	this.instance_4 = new lib.stayingpower();
	this.instance_4.setTransform(77.7,71,1,1,0,0,0,64.9,50.8);
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({x:212.7},5).to({_off:true},53).wait(58));

	// hash left vertical
	this.instance_5 = new lib.hashleftvert();
	this.instance_5.setTransform(66.3,147.5,1,1,0,0,0,23.4,93.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:1},4).to({_off:true},127).wait(8));

	// Layer 14 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AgrV/MAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AgrV/MAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AgrVeMAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AgrU9MAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AgrUcMAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AgrT7MAAAgjhINuAAMAAAAjhg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AgrTaMAAAgjhINuAAMAAAAjhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:83.5,y:140.8}).wait(17).to({graphics:mask_2_graphics_18,x:83.5,y:140.8}).wait(1).to({graphics:mask_2_graphics_19,x:83.5,y:137.5}).wait(1).to({graphics:mask_2_graphics_20,x:83.5,y:134.2}).wait(1).to({graphics:mask_2_graphics_21,x:83.5,y:130.9}).wait(1).to({graphics:mask_2_graphics_22,x:83.5,y:127.6}).wait(1).to({graphics:mask_2_graphics_23,x:83.5,y:124.3}).wait(117));

	// hash right vertical
	this.instance_6 = new lib.hashrightvert();
	this.instance_6.setTransform(126.1,147.5,1,1,0,0,0,23.4,93.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:1},4).to({_off:true},127).wait(8));

	// hash top horiz
	this.instance_7 = new lib.hashtophorz();
	this.instance_7.setTransform(23.5,118.4,1,1,0,0,0,0,9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({alpha:1},4).wait(13).to({y:118},0).to({scaleX:0.74},5).to({scaleX:1.61},6).to({_off:true},103).wait(8));

	// hash bottom horiz
	this.instance_8 = new lib.hashbottomhoriz();
	this.instance_8.setTransform(91.5,178.1,1,1,0,0,0,77.5,9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({alpha:1},4).to({_off:true},127).wait(8));

	// logo mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("AkUDoIAAnPIIpAAIAAHPg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:268.8,y:221.5}).wait(139));

	// ND logo
	this.instance_9 = new lib.ndmendozalogoworking();
	this.instance_9.setTransform(337.9,216,1,1,0,0,0,91.4,12.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_9.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({alpha:1},4).to({_off:true},77).wait(58));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCB439").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},134).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;