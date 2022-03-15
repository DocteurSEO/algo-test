const GogoKodo = require('./algo')

test('should call console.log 100 time', () => {
    const consoleSpy = jest.spyOn(console, 'log');
     GogoKodo()
    
  
     expect(consoleSpy.mock.calls).toHaveLength(100);
  });
  
  test('should the first call equal 1, second call equal 2, third call equal Gogo', () => {
    const consoleSpy = jest.spyOn(console, 'log');
     GogoKodo()
    
  
    expect(consoleSpy.mock.calls[0][0]).toBe(1);
    expect(consoleSpy.mock.calls[1][0]).toBe(2);
    expect(consoleSpy.mock.calls[2][0]).toBe('Gogo');
  });



  test('if the number is divisible by 3 : we write Gogo ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
     GogoKodo()
    
  
    for (let i = 3; i< 101; i+=3){
    if (i % 15 != 0) { 
    expect(consoleSpy.mock.calls[i-1][0]).toBe('Gogo');
}}
  });

  test('if the number is divisible by 5 : we write Kodo ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
     GogoKodo()
    
  
    for (let i = 5; i< 101; i+=5){
    if (i % 15 != 0) { 
    expect(consoleSpy.mock.calls[i-1][0]).toBe('Kodo');
}}
  });

  test('if the number is divisible by 3 and 5 : we write GogoKodo ', () => {
    const consoleSpy = jest.spyOn(console, 'log');
     GogoKodo()
    
  
    for (let i = 1; i< 101; i++){
    if (i % 15 == 0) { 
    expect(consoleSpy.mock.calls[i-1][0]).toBe('GogoKodo');
}}
  });

 