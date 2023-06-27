for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('amazon\n' );
  } else if (i % 3 == 0) {
    console.log('google\n' );
  } else if (i % 5 == 0) {
    console.log('facebook\n' );
  } else {
    console.log(i);
  }
}
