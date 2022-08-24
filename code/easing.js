export var easings = { // Easings taken from https://easings.net/
	linear: (x) => {
		return x;
	},
	easeInSine: (x) => {
		return 1 - Math.cos((x * Math.PI) / 2);
	},
	easeOutSine: (x) => {
		return Math.sin((x * Math.PI) / 2);
	},
	easeInOutSine: (x) => {
		return -(Math.cos(Math.PI * x) - 1) / 2;
	},
	easeInQuad: (x) => {
		return x * x;
	},
	easeOutQuad: (x) => {
		return 1 - (1 - x) * (1 - x);
	},
	easeInOutQuad: (x) => {
		return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
	},
	easeInCubic: (x) => {
		return x * x * x;
	},
	easeOutCubic: (x) => {
		return 1 - Math.pow(1 - x, 3);
	},
	easeInOutCubic: (x) => {
		return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
	},
	easeInQuart: (x) => {
		return x * x * x * x;
	},
	easeOutQuart: (x) => {
		return 1 - Math.pow(1 - x, 4);
	},
	easeInOutQuart: (x) => {
		return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
	},
	easeInQuint: (x) => {
		return x * x * x * x * x;
	},
	easeOutQuint: (x) => {
		return 1 - Math.pow(1 - x, 5);
	},
	easeInOutQuint: (x) => {
		return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
	},
	easeInExpo: (x) => {
		return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
	},
	easeOutExpo: (x) => {
		return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
	},
	easeInOutExpo: (x) => {
		return x === 0
	  ? 0
  	: x === 1
	  ? 1
  	: x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
	  : (2 - Math.pow(2, -20 * x + 10)) / 2;
	},
	easeInCirc: (x) => {
		return 1 - Math.sqrt(1 - Math.pow(x, 2));
	},
	easeOutCirc: (x) => {
		return Math.sqrt(1 - Math.pow(x - 1, 2));
	},
	easeInOutCirc: (x) => {
		return x < 0.5
	  ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
  	: (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
	},
	easeInBack: (x) => {
		const c1 = 1.70158;
		const c3 = c1 + 1;
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: (x) => {
		const c1 = 1.70158;
		const c3 = c1 + 1;
		return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
	},
	easeInOutBack: (x) => {
		const c1 = 1.70158;
		const c2 = c1 * 1.525;
		return x < 0.5
	  ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
	  : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
	},
	easeInBounce: (x) => {
		return 1 - easings.easeOutBounce(1 - x);
	},
	easeOutBounce: (x) => {
		const n1 = 7.5625;
		const d1 = 2.75;
		
		if (x < 1 / d1) {
		    return n1 * x * x;
		} else if (x < 2 / d1) {
		    return n1 * (x -= 1.5 / d1) * x + 0.75;
		} else if (x < 2.5 / d1) {
		    return n1 * (x -= 2.25 / d1) * x + 0.9375;
		} else {
		    return n1 * (x -= 2.625 / d1) * x + 0.984375;
		}
	},
	easeInOutBounce: (x) => {
		return x < 0.5
	  ? (1 - easings.easeOutBounce(1 - 2 * x)) / 2
	  : (1 + easings.easeOutBounce(2 * x - 1)) / 2;
	}
}

export var tweentypes = {
	FOREVER: (t, st, tl) => {
		if (t - st >= tl) {
			return "FOREVER";
		}
		return "CONTINUE";
	},
	LERPFOREVER: (t, st, tl) => {
		return "LF";
	},
	PINGPONG: (t, st, tl) => {
		if (t - st >= tl) {
			return "PING";
		}
		return "CONTINUE";
	},
	NORMAL: (t, st, tl) => {
		if (t - st >= tl) {
			return "CALLBACK";
		}
		return "CONTINUE";
	}
}

export function tween(func, attrs, timeLen, minVal, maxVal, ease, type, onFinish) {
	var minVal = minVal != undefined ? minVal : func[attrs[0]];
	var ease = ease != undefined ? ease : easings.linear;
	var type = type != undefined ? type : tweentypes.NORMAL;
	var stTime = time();
	var onFinish = onFinish != undefined ? onFinish : "ud";
	var upd = onUpdate(() => {
		switch (type(time(), stTime, timeLen)) {
			case "CALLBACK":
				for (h in attrs) {
					func[attrs[h]] = maxVal;
				}
				upd();
				return onFinish == "ud" ? true : onFinish();
			case "FOREVER":
				stTime = time();
				break;
			case "CONTINUE":
				for (h in attrs) {
					func[attrs[h]] = minVal;
				}
				break;
			case "PING":
				var buffer = minVal;
				minVal = maxVal;
				maxVal = buffer;
				stTime = time();
				break;
			default:
				break;
		}
		for (i in attrs) {
			func[attrs[i]] = lerp(minVal, maxVal, ease((time() - stTime) / timeLen));
		}
	});
}