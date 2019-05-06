<template>
   <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        学生管理
                    </template>
                    <MenuItem name="1-1" to="/user/list">学生列表</MenuItem>
                    <MenuItem name="1-2" to="/user/creat">新增学生</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        班级管理
                    </template>
                    <MenuItem name="2-1" to="/class/list">班级列表</MenuItem>
                    <MenuItem name="2-2" to="/class/create">新增班级</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        打卡管理
                    </template>
                    <MenuItem name="3-1" to="/attend/list">当日打卡列表</MenuItem>
                    <MenuItem name="3-2" to="/attend/list">作业点评</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: 'pink', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <!-- <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb> -->
                <Card>
                    <router-view/>
                </Card>
            </Content>
        </Layout>
    </div>
</template>