import React from 'react';

interface TestProps {
  testing?: string;
}

const TestType: any = ({testing}: TestProps) => {
  return (
    <div>hello typescript update</div>
  )
}

export default TestType;