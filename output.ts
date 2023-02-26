export interface RootObject {
	a: number;
	b: string;
	c: boolean;
	d: D;
	e: E;
	f: any[];
	g: string[];
	h: H[];
	i: any;
}

export interface D {
	d1: number;
	d2: string;
	d3: boolean;
	d4: D4;
}

export interface D4 {
	d41: number;
	d42: string;
	d43: boolean;
	d44: object;
}

export interface E {
	e1: number;
	e2: string;
	e3: boolean;
	e4: E4;
}

export interface E4 {
	e41: number;
	e42: string;
	e43: boolean;
	e44: object;
}

export interface H {
	name: string;
	lastname: string;
}

