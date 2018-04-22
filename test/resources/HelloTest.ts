//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { TestSuite, Test, Before, After, Async } from "jec-juta";
import { expect } from "chai";
import { Hello } from "../../src/resources/Hello";

@TestSuite({
  description: "Test the Hello class methods"
})
export class HelloTest {

  public resource:Hello = null;

  @Before()
  public initTest():void {
    this.resource = new Hello();
  }

  @After()
  public resetTest():void {
    this.resource = null;
  }

  @Test({
    description: "should return 'Hello World!'"
  })
  public sayHelloWorldTest(@Async done:Function):void {
    this.resource.sayHelloWorld((data:any, err:any)=>{
      expect(data).to.equals("Hello World!");
      done();
    });
  }
  
  @Test({
    description: "should return 'Hello <name>!' where <name> is equal to the 'username' parameter"
  })
  public sayHelloUserTest(@Async done:Function):void {
    const username:string = "John DOE";
    this.resource.sayHelloUser(username, (data:any, err:any)=>{
      expect(data).to.equals(`Hello ${username}!`);
      done();
    });
  }
}