const enhancer = require('./enhancer.js');
// test away!

describe(' Enchanting', () => {
	describe('repair()', () => {
		it('should return the item durability repair to 100', () => {
			const axe = {
				durability: 26,
				enhancement: 1,
			};
			expect(enhancer.repair(axe).durability).toBe(100);
		});
	});

	describe('succeed', () => {
		const Staff = {

			durability: 66,
			enhancement: 11,
    };
         const wand = {

			durability: 12,
			enhancement: 20,
        };
        
	it('should return item enhancement + 1', () => {
			expect(enhancer.succeed(Staff).enhancement).toBe(12);
    });
    it('should not enchant a item at 20 already', () => {
			expect(enhancer.succeed(wand).enhancement).toBe(20);
		});
  });
  
  describe('fail', () => {
		const Bow = {
			durability: 76,
			enhancement: 11,
        };
        
	test('should return item enhancement - 1', () => {
			expect(enhancer.fail(Bow).enhancement).toBe(10);
    });
    test('should return durabiulity - 10', () => {
			expect(enhancer.fail(Bow).durability).toBe(71);
		});
  });
});