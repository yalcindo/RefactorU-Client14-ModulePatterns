describe('repeatString', function() {
 it('should return a string repeated n times', function() {
  expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
 });
});

describe('repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  expect(str).toEqual('ohhihihi');
 });
});
describe('repeatMore', function() {
 it('should return a string repeated as many times as called', function() {
  expect(Repeater.repeatMore('cat')).toEqual('cat');
 });

 it('should return a string repeated as many times as called', function() {
  expect(Repeater.repeatMore('dog')).toEqual('dogdog');
 });
  it('should return a string repeated as many times as called', function() {
  expect(Repeater.repeatMore('bat')).toEqual('batbatbat');
 });
   it('should return a string repeated as many times as called', function() {
  expect(Repeater.repeatMore('lion')).toEqual('lionlionlionlion');
 });

 it('should return a string repeated as many times as called', function() {
  expect(Repeater.repeatMore('lemur')).toEqual('lemurlemurlemurlemurlemur');
 });
 it('should return count undefined', function() {
  expect(typeof count).toBe('undefined');
 });
});
