import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent          // provided details about our component 
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;    // app is a reference of component using factory methods 
    expect(app).toBeTruthy();             // app is reference. 
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();    // we want to access html code from any html tags. dom is ready to to access the data. 
    const compiled = fixture.nativeElement as HTMLElement;    // equal to dom reference. 
    expect(compiled.querySelector('h1')?.textContent).toContain("Testing");
  });

  it("property or state of component testing ",()=> {
    const obj  = TestBed.createComponent(AppComponent);
    const app  = obj.componentInstance;
    expect(app.id).toEqual(100);
    expect(app.name).toBe("Raj Deep");
    expect(app.age).toBe(21);
    expect(app.result).toBeTruthy();
    expect(app.num.length).toEqual(5);
    expect(app.num[0]).toBe("Raj");
  })

  it("component sayHello function testing ",()=> {
    const obj  = TestBed.createComponent(AppComponent);
    const app  = obj.componentInstance;
    let result = app.sayHello("Raj");
    expect(result).toBe("Welcome Raj");
  })

  it("component add function testing ",()=> {
    const obj  = TestBed.createComponent(AppComponent);
    const app  = obj.componentInstance;
    let result = app.addNumber(10,20)
    expect(result).toBe(30);
  })
  it("component info function testing ",()=> {
    const obj  = TestBed.createComponent(AppComponent);
    const app  = obj.componentInstance;
    expect(app.msg).toEqual("");    // before call 
    app.doChange();
    expect(app.msg).toEqual("Hello"); // after call 
  })

});




