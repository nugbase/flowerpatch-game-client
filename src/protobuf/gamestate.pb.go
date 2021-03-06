// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/gamestate.proto

package protobuf

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type GameState struct {
	Timestamp            int64                `protobuf:"varint,1,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	GameTiles            map[string]*GameTile `protobuf:"bytes,2,rep,name=game_tiles,json=gameTiles,proto3" json:"game_tiles,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-" datastore:"-"`
	XXX_unrecognized     []byte               `json:"-" datastore:"-"`
	XXX_sizecache        int32                `json:"-" datastore:"-"`
}

func (m *GameState) Reset()         { *m = GameState{} }
func (m *GameState) String() string { return proto.CompactTextString(m) }
func (*GameState) ProtoMessage()    {}
func (*GameState) Descriptor() ([]byte, []int) {
	return fileDescriptor_62a98be25ab3da87, []int{0}
}

func (m *GameState) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GameState.Unmarshal(m, b)
}
func (m *GameState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GameState.Marshal(b, m, deterministic)
}
func (m *GameState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GameState.Merge(m, src)
}
func (m *GameState) XXX_Size() int {
	return xxx_messageInfo_GameState.Size(m)
}
func (m *GameState) XXX_DiscardUnknown() {
	xxx_messageInfo_GameState.DiscardUnknown(m)
}

var xxx_messageInfo_GameState proto.InternalMessageInfo

func (m *GameState) GetTimestamp() int64 {
	if m != nil {
		return m.Timestamp
	}
	return 0
}

func (m *GameState) GetGameTiles() map[string]*GameTile {
	if m != nil {
		return m.GameTiles
	}
	return nil
}

func init() {
	proto.RegisterType((*GameState)(nil), "protobuf.GameState")
	proto.RegisterMapType((map[string]*GameTile)(nil), "protobuf.GameState.GameTilesEntry")
}

func init() { proto.RegisterFile("protobuf/gamestate.proto", fileDescriptor_62a98be25ab3da87) }

var fileDescriptor_62a98be25ab3da87 = []byte{
	// 182 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x28, 0x28, 0xca, 0x2f,
	0xc9, 0x4f, 0x2a, 0x4d, 0xd3, 0x4f, 0x4f, 0xcc, 0x4d, 0x2d, 0x2e, 0x49, 0x2c, 0x49, 0xd5, 0x03,
	0x0b, 0x09, 0x71, 0xc0, 0x64, 0xa4, 0xc4, 0x51, 0xd4, 0x94, 0x64, 0xe6, 0x40, 0x95, 0x28, 0xed,
	0x63, 0xe4, 0xe2, 0x74, 0x4f, 0xcc, 0x4d, 0x0d, 0x06, 0x69, 0x13, 0x92, 0xe1, 0xe2, 0x2c, 0xc9,
	0x04, 0x9b, 0x91, 0x5b, 0x20, 0xc1, 0xa8, 0xc0, 0xa8, 0xc1, 0x1c, 0x84, 0x10, 0x10, 0x72, 0xe4,
	0xe2, 0x02, 0xe9, 0x8e, 0x07, 0x69, 0x2f, 0x96, 0x60, 0x52, 0x60, 0xd6, 0xe0, 0x36, 0x52, 0xd2,
	0x83, 0x99, 0xac, 0x07, 0x37, 0x06, 0xcc, 0x0a, 0x01, 0x29, 0x72, 0xcd, 0x2b, 0x29, 0xaa, 0x0c,
	0xe2, 0x4c, 0x87, 0xf1, 0xa5, 0x02, 0xb8, 0xf8, 0x50, 0x25, 0x85, 0x04, 0xb8, 0x98, 0xb3, 0x53,
	0x2b, 0xc1, 0x96, 0x71, 0x06, 0x81, 0x98, 0x42, 0x1a, 0x5c, 0xac, 0x65, 0x89, 0x39, 0xa5, 0xa9,
	0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0xdc, 0x46, 0x42, 0xa8, 0x36, 0x80, 0xb4, 0x06, 0x41, 0x14, 0x58,
	0x31, 0x59, 0x30, 0x26, 0xb1, 0x81, 0x65, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0xb4, 0x62,
	0x94, 0x89, 0x06, 0x01, 0x00, 0x00,
}
